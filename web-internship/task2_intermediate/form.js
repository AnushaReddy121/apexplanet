document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const email=document.getElementById("email").value;
  const re=/^\S+@\S+\.\S+$/;
  if(!re.test(email)){
    alert("❌ Invalid email address");
    return;
  }
  alert("✅ Form submitted successfully!");
});
