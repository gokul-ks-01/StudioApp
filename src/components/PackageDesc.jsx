
const packages = [
   {
       id: 1,
       title: "Combined",
       details: `
           Engagement: Photography - Bride Side Only (1 photographer) 

           Wedding: Photography - Bride and Groom (1 photographer each side)
                    Videography - Bride and Groom (1 videographer each side)

           Save the date: Photography and reel

           Deliverables: Save the date stills
                        Album and mini album (85 sheets, extra page 700 per page)
                        1 Highlights video
                        Full function video
                        2 Photoframes
                        1 calendar

           Cost: 95000/-
       `
   },
   {
      id: 2,
      title: "BrideSide",
      details: `
          Engagement: Photography - Bride Side Only (1 photographer)

          Wedding: Photography - Bride - 1 photographer
                   Videography - Bride - 1 videographer

          Save the date: Photography and reel

          Deliverables: Save the date stills
                       Album and mini album (85 sheets, extra page 700 per page)
                       1 Highlights video
                       Full function video
                       2 Photoframes
                       1 calendar

          Cost: 65000/-
      `
  },
  {
   id: 2,
   title: "GroomSide",
   details: `
       Engagement: Photography - Groom Side Only (1 photographer)

       Wedding: Photography - Groom - 1 photographer
                Videography - Groom - 1 videographer

       Save the date: Photography and reel


       Deliverables: Save the date stills
                    Album and mini album (85 sheets, extra page 700 per page)
                    1 Highlights video
                    Full function video
                    2 Photoframes
                    1 calendar
                    
       Cost: 65000/-
   `
},
   // Add more packages here as needed
];

export default packages;


export function PackageDesc({ title }){

   const packageDetails = packages.find(pkg => pkg.title === title);
return (
   <div>
      <h1>{title}</h1>
      <p>{packageDetails ? packageDetails.details : "Package not found"}</p>
   </div>
);
}
