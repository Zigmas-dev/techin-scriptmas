// Array to store students
const students = [];

const studentInput = document.getElementById("studentInput");
const addBtn = document.getElementById("addBtn");
const countBtn = document.getElementById("countBtn");
const list = document.getElementById("list");
const result = document.getElementById("result");

// Add student to array
addBtn.addEventListener("click", () => {
  const value = studentInput.value.trim();

  if (value === "") return;

  students.push(value);
  studentInput.value = "";

  list.textContent = "Mokiniai:\n" + students.join("\n");
});

// Count girls
countBtn.addEventListener("click", () => {
  const girls = [];

  for (const student of students) {
    const parts = student.split(" ");
    const firstName = parts[1];

    if (firstName && (firstName.endsWith("a") || firstName.endsWith("ė"))) {
      girls.push(student);
    }
  }

  let output = `${girls.length}\n`;
  output += girls.join("\n");

  result.textContent = output;
});
