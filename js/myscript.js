const URL="https://covid19.mathdro.id/api";




let app= angular.module("MyApp",[])


app.controller("MyCTRL",($scope, $http)=>{
    //This is controler
    $scope.title ="Stay Home Stay Safe";

    // $scope.changevalue=()=>{
    //     $scope.title="This is home time";
    // };

    console.log("App Loaded");

    //Calling API
    $http.get(URL).then((response)=>{
        //Success
        console.log("From Inside Success");
        console.log(response.data);
        $scope.all_data= response.data;

    // GET COUNTRY DATA
        $scope.get_country_data= ()=>{
            let country=$scope.c;
            if(country==""){
                $scope.c_data =undefined;
                return;
            }
            else{
                $http.get(`${URL}/countries/${country}`).then(
                    (response)=>{
                        console.log(response.data);
                        $scope.c_data= response.data;
                    },
                    (error)=>{
                            console.log(error);
                    })
            }
        };


    },
    (error)=>{
        //Error
       // console.log("From Inside Error");


        console.log(error);
    })



});