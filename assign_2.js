$.ajax({
    url:"https://jsonplaceholder.typicode.com/users/",
    method:"GET",
    data: {get_param:'value'},

    success:function(data){
                $.each(data,function(index,element){

                });
                console.log(data);
                $(document).ready(function(){
                    $('#tbl').DataTable({
                        data:data,
                        columns:[
                            {data:"id"},
                            {data:"name"},
                            {data:"email"},
                        ]
                    });
                });
            }
});
               