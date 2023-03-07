function convertirLetraCapital(word){
    // ej pasa primer caracter a mayucula entrada word='pepe' salida word='Pepe'
    word=word.charAt(0).toUpperCase() + word.slice(1);
return word;
}

function importJSON(){
    let call= new XMLHttpRequest();
    let url='https://randomuser.me/api/';
    call.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            /*console.log(this.responseText);*/
            let result=JSON.parse(this.responseText);
            //-----------Seccion Nombre
            document.getElementById("results_picture").srcset=result.results[0].picture.thumbnail+" 400w,"+result.results[0].picture.medium+" 700w,"+result.results[0].picture.large+" 900w";
            document.getElementById("results_picture").sizes="(max-width: 400px) 400px,(max-width: 768px) 700px, 900px";
            document.getElementById("results_picture").src=result.results[0].picture.large;
            document.getElementById("results_title_name_last").textContent=convertirLetraCapital(result.results[0].name.title)+" "+convertirLetraCapital(result.results[0].name.first)+" "+convertirLetraCapital(result.results[0].name.last);
            document.getElementById("results_name_title").textContent=convertirLetraCapital(result.results[0].name.title);
            document.getElementById("results_name_first").textContent=convertirLetraCapital(result.results[0].name.first);
            document.getElementById("results_name_last").textContent=convertirLetraCapital(result.results[0].name.last);
            document.getElementById("results_gender").textContent=convertirLetraCapital(result.results[0].gender);
            document.getElementById("results_nat").textContent=convertirLetraCapital(result.results[0].nat);
            //----date----
                let clearDate=result.results[0].dob.date.split('T');
                let splitDate=clearDate[0].split('-');
                let invertedDate=splitDate[2]+"-"+splitDate[1]+"-"+splitDate[0];
            document.getElementById("results_dob_date").textContent=invertedDate;
            //----end date----
            document.getElementById("results_dob_age").textContent=result.results[0].dob.age;
            //-----------Seccion Domicilio
            document.getElementById("results_location_country").textContent=convertirLetraCapital(result.results[0].location.country);
            document.getElementById("results_location_state").textContent=convertirLetraCapital(result.results[0].location.state);
            document.getElementById("results_location_city").textContent=convertirLetraCapital(result.results[0].location.city);
            document.getElementById("results_location_postcode").textContent=result.results[0].location.postcode;
            document.getElementById("results_location_street_name").textContent=convertirLetraCapital(result.results[0].location.street.name);
            document.getElementById("results_location_street_number").textContent=result.results[0].location.street.number;
            document.getElementById("results_location_coordinates_latitude").textContent=result.results[0].location.coordinates.latitude;
            document.getElementById("results_location_coordinates_longitude").textContent=result.results[0].location.coordinates.longitude;
            document.getElementById("results_location_timezone_offset").textContent=result.results[0].location.timezone.offset;
            document.getElementById("results_location_timezone_description").textContent=convertirLetraCapital(result.results[0].location.timezone.description);
            let locationComplete=result.results[0].location.street.name+"+"+result.results[0].location.street.number+"+"+result.results[0].location.city+"+"+result.results[0].location.state+"+"+result.results[0].location.country;
            try{
                document.getElementById("googlemap").src="https://maps.google.com/maps?q="+ locationComplete +"&loc:"+result.results[0].location.coordinates.latitude+"+"+result.results[0].location.coordinates.longitude+"&z=16&output=embed";
            }
            catch(error)
                {
                }
            
            //-----------Seccion Contacto
            document.getElementById("results_phone").textContent=result.results[0].phone;
            document.getElementById("results_cell").textContent=result.results[0].cell;
            document.getElementById("results_email").textContent=result.results[0].email;
            //-----------Seccion Datos de Acceso
            document.getElementById("results_login_uuid").textContent=result.results[0].login.uuid;
            document.getElementById("results_login_username").textContent=result.results[0].login.username;
            document.getElementById("results_login_password").textContent=result.results[0].login.password;
            document.getElementById("results_login_salt").textContent=result.results[0].login.salt;
            document.getElementById("results_login_md5").textContent=result.results[0].login.md5;
            document.getElementById("results_login_sha1").textContent=result.results[0].login.sha1;
            document.getElementById("results_login_sha256").textContent=result.results[0].login.sha256;
            //-----------
            document.getElementById("info_seed").textContent=result.info.seed;
            document.getElementById("info_results").textContent=result.info.results;
            document.getElementById("info_page").textContent=result.info.page;
            document.getElementById("info_version").textContent=result.info.version;
            goTo('1');
            document.getElementById('btn-menu').click();
        }/*end if(this.readyState==4 && this.status==200)*/
    }/*end function*/
    call.open('GET',url,true);
    call.send();
}/*end function importJSON()*/

/* ejemplo de la esctructura del objeto que devuelve la api 'https://randomuser.me/api/'
{
    "results":
                [
                    {   "gender":   "male",
                        "name":     {
                                    "title":"Mr",
                                    "first":"Mamede",
                                    "last":"Melo"
                                    },
                        "location": {"street":  {
                                                "number":6457,
                                                "name":"Rua São Paulo "
                                                },
                                    "city":"Vitória",
                                    "state":"Tocantins",
                                    "country":"Brazil",
                                    "postcode":60560,
                                    "coordinates":  {
                                                    "latitude":"-78.5300",
                                                    "longitude":"-82.0211"
                                                    },
                                    "timezone":     {
                                                    "offset":"-6:00",
                                                    "description":"Central Time (US & Canada), Mexico City"
                                                    }
                                    },
                        "email":"mamede.melo@example.com",
                        "login":    {
                                    "uuid":"a93acff8-b838-4239-b680-abc2c23af3ce",
                                    "username":"orangebird664",
                                    "password":"hans",
                                    "salt":"UHoIkoKB",
                                    "md5":"bca8971ad8bc270ce906bfc4babfac62",
                                    "sha1":"d42fc1b2ab172641eab77c493a2ec0a9744755d4",
                                    "sha256":"f40792bf168b407a01ff5ac2f338de292845e8af40b256bec6c28c4ac7ebbcb3"
                                    },
                        "dob":      {
                                    "date":"1986-07-02T17:06:22.915Z",
                                    "age":36
                                    },
                        "registered": {
                                    "date":"2018-02-02T04:47:19.896Z",
                                    "age":4
                                    },
                        "phone":"(71) 2691-7988",
                        "cell":"(36) 6259-5378",
                        "id":       {
                                    "name":"CPF",
                                    "value":"473.454.281-71"
                                    },
                        "picture":  {
                                    "large":"https://randomuser.me/api/portraits/men/14.jpg",
                                    "medium":"https://randomuser.me/api/portraits/med/men/14.jpg",
                                    "thumbnail":"https://randomuser.me/api/portraits/thumb/men/14.jpg"
                                    },
                        "nat": "BR"
                       }
                ],
    "info": {
            "seed":"4e6c6007d07ca1bb",
            "results":1,
            "page":1,
            "version":"1.4"
            }
}
*/

function goTo(section){
    document.getElementById('section1').className="hide-section";
    document.getElementById('section2').className="hide-section";
    document.getElementById('section3').className="hide-section";
    document.getElementById('section4').className="hide-section";
    document.getElementById('section5').className="hide-section";
    document.getElementById('section6').className="hide-section";
    document.getElementById('btn-menu').click();
    document.getElementById('section'+section).className="show-section";
}