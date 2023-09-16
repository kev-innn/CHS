
const SERVICE_ID = "service_386kyol";
const TEMPLATE_ID = "template_1vrqv5e";
const PUBLIC_KEY = "e1ypA0MpTSVsR5ZHJ";



      function sendMail() {
        var params = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,
        };
      
        const serviceID = "service_386kyol";
        const templateID = "template_1vrqv5e";
      
          emailjs.send(serviceID, templateID, params)
          .then(res=>{
              document.getElementById("name").value = "";
              document.getElementById("email").value = "";
              document.getElementById("message").value = "";
              console.log(res);
              alert("Your message sent successfully!!")
      
          })
          .catch(err=>console.log(err));
      
      }