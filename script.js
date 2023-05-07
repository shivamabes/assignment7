let i=0;

function changeimage(){
    switch(i)
    {
       case 0: document.getElementsByTagName("body")[0].style.backgroundImage="url('https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082__480.jpg')";
       i++;
       break;
       case 1: document.getElementsByTagName("body")[0].style.backgroundImage="url('https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png')";
       i++;
       break;
    //    case 2: document.getElementsByTagName("body")[0].style.backgroundImage="url('https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301__480.jpg')";
    //    i++;
    //    break;
       case 2: document.getElementsByTagName("body")[0].style.backgroundImage="url('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg')";
       i++;
       break;
       case 3: document.getElementsByTagName("body")[0].style.backgroundImage="url('https://cdn.pixabay.com/photo/2019/04/10/11/56/watercolor-4116932__480.png')";
       i++;
       break;
       case 4: document.getElementsByTagName("body")[0].style.backgroundImage="url('https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637__480.jpg')";
       i++;
       break;
       case 5: document.getElementsByTagName("body")[0].style.backgroundImage="url('https://cdn.pixabay.com/photo/2020/02/06/01/52/frame-4822807__480.png')";
       i++;
       break;
       case 6: document.getElementsByTagName("body")[0].style.backgroundImage="url('https://cdn.pixabay.com/photo/2016/04/18/22/05/seashells-1337565__480.jpg')";
       i++;
       break;
       case 7: document.getElementsByTagName("body")[0].style.backgroundImage="url('https://cdn.pixabay.com/photo/2015/01/07/16/37/wood-591631__480.jpg')";
       i++;
       break;
       case 8: document.getElementsByTagName("body")[0].style.backgroundImage="url('https://cdn.pixabay.com/photo/2017/02/15/20/33/floral-2069810__480.png')";
       i++;
       break;
       case 9: document.getElementsByTagName("body")[0].style.backgroundImage="url('https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252__480.jpg')";
       i++;
       break;

    }
    if(i==10)
    {
        i=0;
    }
}