load_data();
window.addEventListener('scroll',()=>{
    // console.log(window.scrollY) //scrolled from top
    // console.log(window.innerHeight) //visible part of screen
    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight){
    load_data();
    }
})

function load_data() {
    // console.log("hello");
    // let i = 0;
    // while (i < numImages) {\
    fetch('/get_collegedunia_data').then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data['data'])
                for (i = 0; i < data['data'].length; i++) {
                    document.getElementById('main_data').innerHTML += ' <div class="sub_div"><div class="img" style = "width: 100%;position: relative;" ><img style="width: 100%;filter: brightness(30%);" src="/img/'+ data['data'][i].image+'"><div class="tags"><div class="promoted" style="background-color: #68A7FF;padding: 0px 55px;color: #fff;"><p>PROMOTED</p></div><div class="rating" style="background-color: #F5A626;padding: 12px 19px;color: #fff;border-radius: 10%;text-align: center;"><p style="margin: 0px;"><span style="font-size: 23px;font-weight: bold;">' + data['data'][i].rating + '</span>/5</p><p style="margin: 0px;">Very Good</p></div><div class="data"><div style="background-color: #fff;padding: 5px 10px;border-radius: 10px;">' + data['data'][i].tags[0] +'</div><div style="background-color: #fff;padding: 5px 10px;border-radius: 10px;margin-left: 30px;">' + data['data'][i].tags[1] +'</div><div style="color: #fff;margin-left: 140px;">#' + data['data'][i].ranking + '</div></div></div></div><div style="width: 100%;background-color: #fff;"><div style="width: 94%;display: flex;margin: 10px auto;"><div style="width: 70%;"><h3 style="margin:10px;">' + data['data'][i].college_name + '</h3><p style="margin:10px;">' + data['data'][i].nearest_place[0] + ' | <span style="color: #ACACAC;">' + data['data'][i].nearest_place[1] + '</span></p><p style="margin:10px;"><span style="color: #3CB598;">93% Match:</span><spanstyle="color: #ACACAC;">from GTB Nagar</span><span style="color: #3CB598;">,</span> 7 Kms <span style="color: #ACACAC;">from Rajiv Chowk</span></p></div><div style="width: 30%;text-align: end;"><div style="width: 100%;display: flex;justify-content: end;align-items: center;"><p style="margin: 0px;padding: 2px 12px;"><s>₹ ' + data['data'][i].original_fees + '</s></p><div style="background-color: #DD1C26;"><p style="color: #fff;margin: 0px;padding: 2px 4px;">'+ data['data'][i].discount +'</p></div></div><h1 style="color: #DD1C26;margin:0px;">₹ ' + data['data'][i].discounted_fees + '</h1><p style="margin:0px;">' + data['data'][i].fees_cycle + '</p></div></div><div style="width: 100%;display: flex;margin-bottom: 20px;"><div style="width: 60%;background-color: #CCF5E7;padding: 6px 6px;border-top-right-radius: 100px;border-bottom-right-radius: 100px;"><p>Flat Rs<span style="color: #3CB598;">2,000</span> off + upto Rs <span style="color: #3CB598;">500</span> wallet! to avail... <spanstyle="color: #6BC3DC;"><b>LOGIN</b></span> </p></div><div style="width: 40%;"><div style="width: 94%;margin: 0 auto;text-align: end;"><P style="color: #3CB598;">' + data['data'][i].amenties[0] + ' . ' + data['data'][i].amenties[1] + '</P></div></div></div></div></div > '
                }
            }
        })
    })


}