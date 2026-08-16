const skillsData = {
    inProgress: [
        {
            name: "React", // เปลี่ยนจาก PySpark เป็น React
            category: "Front-end Development",
            desc: "กำลังศึกษาการสร้าง UI ด้วย Components, Hooks และการจัดการ State",
            icon: "⚛️", // หรือไอคอนที่คุณชอบ
            badge: "Learning",
            level: "Intermediate"
        }
    ],
    completed: [
        {
            name: "SQL",
            category: "Database Query",
            desc: "Advanced querying, joins, and performance tuning.",
            icon: "SQL",
            status: "Done",
            level: "Proficient"
        },
        {
            name: "MongoDB",
            category: "NoSQL Database",
            desc: "Document database design and aggregation pipelines.",
            icon: "MDB",
            status: "Done",
            level: "Intermediate"
        },
        {
            name: "PostgreSQL",
            category: "Relational DB",
            desc: "Relational schema design, indexes, and complex queries.",
            icon: "PGS",
            status: "Done",
            level: "Proficient"
        },
        {
            name: "Power BI",
            category: "Data Visualization",
            desc: "DAX modeling, ETL with Power Query, and interactive dashboards.",
            icon: "PBI",
            status: "Done",
            level: "Advanced"
        },
        {
            name: "Git / GitHub",
            category: "Version Control",
            desc: "Repository management, branching workflows, and collaboration.",
            icon: "GIT",
            status: "Done",
            level: "Proficient"
        },
         {
            name: "PySpark",
            category: "Big Data Processing",
            desc: "โฟกัสหลักในกระบวนการประมวลผลข้อมูลขนาดใหญ่และ Distributed Computing",
            icon: "🚀",
            badge: "Learning",
            level: "Intermediate (กำลังลุยเข้มข้น)"
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. ลูกเล่นทักทายตามช่วงเวลาบน Dashboard Header
    const hour = new Date().getHours();
    let greeting = "Welcome to My Dashboard";
    if (hour < 12) greeting = "🌅 Good Morning, Visitor!";
    else if (hour < 18) greeting = "☀️ Good Afternoon, Visitor!";
    else greeting = "🌙 Good Evening, Visitor!";

    const subtitleEl = document.querySelector("header p");
    if (subtitleEl) subtitleEl.textContent = `${greeting} — ภาพรวมทักษะความเชี่ยวชาญและเครื่องมือที่กำลังศึกษาพัฒนา`;

    // 2. Animate Counter ตัวเลขสถิติแบบสมูท
    animateCounter("completed-count", skillsData.completed.length, " Tools");
    document.getElementById("learning-count").textContent = `1 (PySpark)`;

    // 3. เรนเดอร์ส่วน กำลังศึกษาอยู่ (In Progress)
    const learningContainer = document.getElementById("learning-container");
    learningContainer.innerHTML = skillsData.inProgress.map(item => `
        <div class="p-5 rounded-2xl bg-[#FEF2A0] border-2 border-[#1c1412] shadow-[3px_3px_0px_#1c1412] transition-transform duration-200 hover:-translate-y-1 group">
            <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-2xl bg-[#E98B50] text-white border-2 border-[#1c1412] flex items-center justify-center font-bold text-2xl shadow-[2px_2px_0px_#1c1412] group-hover:rotate-6 transition-transform">
                    ${item.icon}
                </div>
                <div>
                    <h3 class="font-extrabold text-[#1c1412] text-lg group-hover:text-[#E98B50] transition-colors">${item.name}</h3>
                    <p class="text-xs font-bold text-[#E98B50] mt-0.5">${item.category}</p>
                </div>
            </div>
            <p class="text-xs text-[#1c1412] mt-4 leading-relaxed font-semibold bg-[#F3CD97] p-3 rounded-xl border-2 border-[#1c1412]">
                ${item.desc}
            </p>
        </div>
    `).join('');

    // 4. เรนเดอร์ส่วน ทักษะที่เรียนรู้แล้ว
    const completedContainer = document.getElementById("completed-container");
    completedContainer.innerHTML = skillsData.completed.map(item => `
        <div class="p-3.5 rounded-2xl bg-[#FEF2A0] border-2 border-[#1c1412] shadow-[2px_2px_0px_#1c1412] transition-transform duration-200 hover:-translate-y-0.5 flex items-center justify-between group">
            <div class="flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-xl bg-[#1c1412] text-[#FEF2A0] flex items-center justify-center font-extrabold text-xs tracking-wider border border-[#1c1412] group-hover:bg-[#E98B50] transition-colors">
                    ${item.icon}
                </div>
                <div>
                    <h3 class="font-extrabold text-[#1c1412] text-sm group-hover:text-[#E98B50] transition-colors">${item.name}</h3>
                    <span class="text-[11px] font-bold text-[#1c1412]/70">${item.category}</span>
                </div>
            </div>
            <span class="text-[10px] px-2.5 py-1 rounded-lg bg-[#E98B50] text-white font-extrabold border border-[#1c1412] shadow-[1px_1px_0px_#1c1412]">
                ${item.status}
            </span>
        </div>
    `).join('');
});

// ฟังก์ชันช่วยรันตัวเลขนับเพิ่มขึ้นตอนโหลดหน้าเว็บ
function animateCounter(elementId, targetValue, suffix) {
    const el = document.getElementById(elementId);
    let current = 0;
    const timer = setInterval(() => {
        current++;
        el.textContent = current + suffix;
        if (current >= targetValue) {
            clearInterval(timer);
        }
    }, 200);
}