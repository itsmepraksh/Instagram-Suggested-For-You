  const instaProfiles = [
        {
          img: "https://images.unsplash.com/photo-1631290781538-4c4a3deebf6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDcwfHxpbnN0YWdyYW0lMjBwcm9maWxlfGVufDB8fDB8fHww",
          name: "Aarav Sharma",
          intro: "Tech enthusiast sharing insights on the latest gadgets. 📱💻 #TechLife",
          istatus : "follow"
        },
        {
          img: "https://images.unsplash.com/photo-1583777256067-a3dc67adfdc6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Ishita Verma",
          intro: "Passionate about sustainable living and eco-friendly habits. 🌱♻️ #GreenLiving",
          istatus : "follow"
        },
        {
          img: "https://images.unsplash.com/photo-1564064695621-5cb08cd581eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Rohan Gupta",
          intro: "Fitness junkie on a journey to inspire healthy lifestyles. 🏋️‍♂️💪 #FitIndia",
          istatus : "follow"
        },
        {
          img: "https://images.unsplash.com/photo-1608973043855-7c93498ffbab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Ananya Roy",
          intro: "Fashion lover with a flair for traditional and modern styles. 👗✨ #StyleIcon",
          istatus : "follow"
        },
        {
          img: "https://images.unsplash.com/photo-1626469215775-5bb781dcfd99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
          name: "Arjun Mehta",
          intro: "Photographer capturing moments that tell stories. 📸🌍 #ThroughMyLens",
          istatus : "follow"
        },
        {
          img: "https://images.unsplash.com/photo-1545945856-c53982c35073?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Priya Patel",
          intro: "Foodie exploring diverse cuisines and flavors. 🍛🍜 #FoodieAdventures",
          istatus : "follow"
        },
        {
          img: "https://images.unsplash.com/photo-1622860686767-032799edeb1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Vishal Reddy",
          intro: "Travel blogger documenting journeys across India and beyond. 🌏✈️ #Wanderlust",
          istatus : "follow"
        },
        {
          img: "https://images.unsplash.com/photo-1620117654333-c125fef82817?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Neha Singh",
          intro: "Beauty guru sharing skincare tips and makeup tutorials. 💄✨ #GlowUp",
          istatus : "follow"
        },
        {
          img: "https://images.unsplash.com/photo-1628074955510-bcad4d0706af?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Devansh Joshi",
          intro: "Music lover with a passion for indie and classical vibes. 🎸🎶 #MusicLife",
          istatus : "follow"
        },
        {
          img: "https://images.unsplash.com/flagged/photo-1572364682665-e7d5a39b28f3?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Meera Kapoor",
          intro: "Bookworm diving into stories from around the world. 📚🌍 #ReadersCorner",
          istatus : "follow"
        }
      ];
      
  

let container = document.querySelector('.container')

function heroFunc(){
  let sum = " "

instaProfiles.forEach((elem,idx)=>{ 

    sum = sum + `<div class="component">
            <div class="img">
                <img src=${elem.img} alt="">
            </div>
            <div class="name">${elem.name}</div>
            <div class="intro">${elem.intro}</div>
            <button id=${idx}>${elem.istatus}</button>
        </div>`
     
  })

container.innerHTML = sum;
}

heroFunc()
 

let main = document.querySelector('main')

main.addEventListener('click',function(dets){
   let gold= instaProfiles[dets.target.id]
   if(gold.istatus == 'follow'){
    gold.istatus = "unfollow" 
   }else{
    gold.istatus = "follow"
   }
   heroFunc()
})
