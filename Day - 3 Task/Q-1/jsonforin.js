var json = [{
    "name":"dhanabal",
    "age":"23",
    "native":"trichy"
},
{
    "name":"logu",
    "age":"25",
    "native":"hosur"
}, ,
{
    "name":"saravanan",
    "age":"24",
    "native":"kanchipuram"
}]
for (var i in json){
    console.log(json[i].name);
    console.log(json[i].age);
    console.log(json[i].native);
}
