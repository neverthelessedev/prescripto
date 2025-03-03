const special = [
  "ardiologist",
  "Dermatologist ,,",
  "Neurologist ",
  "Pediatrician",
  "Orthopedic Surgeon ",
  "Oncologist ",
  "Endocrinologist ",
  "Psychiatrist",
  "Gynecologist ",
  "general physician",
  "gynecolorgist",
  "dermatologist",
  "Psychiatrist",
  "Gastroenterologist",
  "pediatricians",
  "neurologist",
  "gastroenterologist",
  "ardiologist",
  "Psychiatrist",
];

for (let i = 0; i < 50; i++) {
  console.log(`
import Doctor${i} from '/doctor/doctor${i}.png'

  
    {
    id: ${i},
    imageUrl: "/doctor/doctor${i}.png",
    isAvailable: true,
    name: "",
    speciality: "${special[Math.floor(Math.random() * special.length)]} ",
  },
    `);
}
