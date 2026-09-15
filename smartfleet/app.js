const vehicles=[
{id:"V001",capacity:1000,load:800,location:"Ahmedabad",status:"On Delivery"},
{id:"V002",capacity:1200,load:300,location:"Vadodara",status:"Available"},
{id:"V003",capacity:1500,load:1350,location:"Surat",status:"On Delivery"},
{id:"V004",capacity:1000,load:200,location:"Ahmedabad",status:"Available"},
{id:"V005",capacity:2000,load:1700,location:"Rajkot",status:"On Delivery"},
{id:"V006",capacity:1500,load:450,location:"Vadodara",status:"Available"},
{id:"V007",capacity:1000,load:850,location:"Ahmedabad",status:"Delayed"},
{id:"V008",capacity:1800,load:600,location:"Surat",status:"Available"}
];
const deliveries=[
{id:"D001",source:"Ahmedabad",destination:"Surat",weight:700,priority:"High",status:"On Time",route:"Ahmedabad-Surat"},
{id:"D002",source:"Vadodara",destination:"Rajkot",weight:400,priority:"Medium",status:"Pending",route:"Vadodara-Rajkot"},
{id:"D003",source:"Ahmedabad",destination:"Surat",weight:600,priority:"High",status:"Delayed",route:"Ahmedabad-Surat"},
{id:"D004",source:"Surat",destination:"Rajkot",weight:900,priority:"Medium",status:"On Time",route:"Surat-Rajkot"},
{id:"D005",source:"Vadodara",destination:"Ahmedabad",weight:500,priority:"High",status:"Pending",route:"Vadodara-Ahmedabad"}
];
const disruptions=[
{id:"R001",type:"Road Block",route:"Ahmedabad-Surat",severity:"HIGH",delay:"2.5 hours",description:"Road disruption may affect vehicles and high-priority deliveries on this route."},
{id:"R002",type:"Heavy Traffic",route:"Vadodara-Rajkot",severity:"MEDIUM",delay:"1 hour",description:"Traffic congestion may increase expected delivery time."},
{id:"R003",type:"Vehicle Breakdown",route:"Surat-Rajkot",severity:"HIGH",delay:"3 hours",description:"A vehicle breakdown may require reassignment for an active delivery."}
];

function util(v){return Math.round((v.load/v.capacity)*100)}
function render(){
  const total=vehicles.length, available=vehicles.filter(v=>v.status==="Available").length, delayed=vehicles.filter(v=>v.status==="Delayed").length, low=vehicles.filter(v=>util(v)<40).length;
  document.getElementById("kpis").innerHTML=[
    ["Total Vehicles",total],["Available",available],["Delayed",delayed],["Underutilised",low]
  ].map(x=>`<div class="kpi"><div class="label">${x[0]}</div><div class="value">${x[1]}</div></div>`).join("");
  document.getElementById("utilisationChart").innerHTML=vehicles.map(v=>`<div class="bar-row"><b>${v.id}</b><div class="bar"><div class="fill" style="width:${util(v)}%"></div></div><b>${util(v)}%</b></div>`).join("");
  document.getElementById("alertList").innerHTML=disruptions.map(d=>`<div class="alert"><strong>⚠️ ${d.type} — ${d.severity}</strong>${d.route}<br><small>Expected delay: ${d.delay}</small></div>`).join("");
  document.getElementById("fleetTable").innerHTML=vehicles.map(v=>`<tr><td><b>${v.id}</b></td><td>${v.capacity} kg</td><td>${v.load} kg</td><td class="${util(v)<40?'util-low':''}">${util(v)}%</td><td>${v.location}</td><td><span class="pill">${v.status}</span></td></tr>`).join("");
  document.getElementById("disruptionCards").innerHTML=disruptions.map(d=>`<div class="card"><h3>⚠️ ${d.type}</h3><p><b>Route:</b> ${d.route}</p><p><b>Severity:</b> ${d.severity}</p><p><b>Expected delay:</b> ${d.delay}</p><div class="reason">${d.description}</div></div>`).join("");
  document.getElementById("deliverySelect").innerHTML=deliveries.map(d=>`<option value="${d.id}">${d.id} — ${d.source} → ${d.destination} (${d.weight} kg)</option>`).join("");
}
function bestVehicle(delivery){
  const candidates=vehicles.filter(v=>v.status==="Available" && (v.capacity-v.load)>=delivery.weight);
  candidates.sort((a,b)=>{
    const disruptionPenalty=(x)=>disruptions.some(d=>d.route===delivery.route && d.severity==="HIGH" && x.location===delivery.source)?1:0;
    return (util(a)+disruptionPenalty(a)*20)-(util(b)+disruptionPenalty(b)*20);
  });
  return candidates[0]||null;
}
function makeRecommendation(delivery){
  const v=bestVehicle(delivery);
  const disruption=disruptions.find(d=>d.route===delivery.route);
  if(!v) return {html:`<p class="danger">No currently available vehicle has enough capacity for ${delivery.id}. Escalate for manual planning.</p>`};
  const after=Math.round(((v.load+delivery.weight)/v.capacity)*100);
  return {html:`<h3>Assign ${v.id} → ${delivery.id}</h3><p><b>Recommendation:</b> Use <b>${v.id}</b> for the ${delivery.source} → ${delivery.destination} delivery.</p><div class="reason"><b>Why?</b><br>• Vehicle is available.<br>• Remaining capacity is ${v.capacity-v.load} kg.<br>• Delivery requires ${delivery.weight} kg.<br>• Current utilisation is ${util(v)}%; estimated utilisation after assignment is ${after}%.<br>${disruption?`• ${delivery.route} currently has a ${disruption.severity.toLowerCase()} severity disruption, so proactive reassignment is recommended.`:""}</div>`};
}
function generateRecommendation(){
  const affected=deliveries.find(d=>disruptions.some(r=>r.route===d.route) && (d.priority==="High"||d.status==="Delayed"));
  const result=makeRecommendation(affected||deliveries[0]);
  document.getElementById("recommendation").innerHTML=result.html;
  document.getElementById("recommendationTime").textContent="Generated just now";
}
function optimiseSelectedDelivery(){
  const d=deliveries.find(x=>x.id===document.getElementById("deliverySelect").value);
  document.getElementById("optimisationResult").innerHTML=makeRecommendation(d).html;
}
function assistantAnswer(q){
  const s=q.toLowerCase();
  if(s.includes("underutil")||s.includes("low utilisation")) {
    const low=vehicles.filter(v=>util(v)<40).map(v=>`${v.id} (${util(v)}%)`).join(", ");
    return `The underutilised vehicles are ${low}. V004 is a strong candidate for reassignment because it is available and has 800 kg remaining capacity.`;
  }
  if(s.includes("affected")||s.includes("disruption")) {
    const affected=deliveries.filter(d=>disruptions.some(r=>r.route===d.route)).map(d=>d.id).join(", ");
    return `The current route disruptions may affect deliveries ${affected}. The highest-priority disruption is the Ahmedabad-Surat road block.`;
  }
  if(s.includes("recommend")||s.includes("what should")||s.includes("action")) {
    const d=deliveries.find(x=>x.priority==="High"&&x.status==="Delayed")||deliveries[0];
    const v=bestVehicle(d);
    return v?`Recommended action: assign ${v.id} to ${d.id}. ${v.id} is available, has sufficient capacity, and is currently at ${util(v)}% utilisation.`:"No suitable available vehicle is currently found.";
  }
  if(s.includes("vehicle")||s.includes("fleet")) return `There are ${vehicles.length} vehicles, ${vehicles.filter(v=>v.status==="Available").length} available and ${vehicles.filter(v=>v.status==="Delayed").length} delayed.`;
  return "I can analyse fleet utilisation, disruptions, affected deliveries and vehicle reassignment. Try asking: “Which vehicles are underutilised?”";
}
function askAssistant(){
  const input=document.getElementById("question"), q=input.value.trim();
  if(!q)return;
  const box=document.getElementById("chatMessages");
  box.innerHTML+=`<div class="message user">${q}</div>`;
  box.innerHTML+=`<div class="message bot">${assistantAnswer(q)}</div>`;
  input.value=""; box.scrollTop=box.scrollHeight;
}
function quickAsk(q){document.getElementById("question").value=q;askAssistant()}
document.querySelectorAll(".nav-btn").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  btn.classList.add("active");document.getElementById(btn.dataset.page).classList.add("active");
}));
render();
