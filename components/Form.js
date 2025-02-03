import { useState,useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
export default function HubspotForm() {
    useEffect(() => {
      // Dynamically load the HubSpot script
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/v2.js";
      script.async = true;
      script.defer = true;
  
      script.onload = () => {
        // Initialize the HubSpot form once the script is loaded
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "49114193", // Replace with your portal ID
            formId: "1e793516-d628-4a04-9850-3b9d76bb1ab2", // Replace with your form ID
            target: "#hubspotForm", // Target container for the form
          });
        }
      };
  
      document.body.appendChild(script);
    }, []);
  
    return (
      <div>
        {/* Container for the HubSpot form */}
        <div className="flex flex-col">
        <button className="pl-72 text-s" onClick={()=>{window.location.reload();}}><CloseIcon/></button>
        <div id="hubspotForm"></div>
        </div>
       
      </div>
    );
  };