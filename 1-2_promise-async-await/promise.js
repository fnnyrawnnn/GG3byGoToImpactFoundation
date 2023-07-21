function Song_Promise(){
     return new Promise((resolve, reject) => {
          // const data = [{ title: "I Love You So", artists: [{ name: "The Walters"}], duration: 200 },
          // { title: "Arjuna", artists: [{ name: "Dewa 19"}], duration: 250 },
          // { title: "Roman Picisan", artists: [{ name: "Dewa 19"}], duration: 150 }];

          const data = null;
          
          (data) ? setTimeout(() => {
               resolve(data);
          }, 2000) : setTimeout(() => {
               reject("Song List is Null");
          }, 2000);
     });
}

Song_Promise()
.then((songs) => { console.log(songs);})
.catch((error) => { console.error("Error:", error);});