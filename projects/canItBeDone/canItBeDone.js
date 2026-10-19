function Schedule(startDate, hours, numResources, hrsPerRes)
{
    //debugger;
    var start;
    var hrsPerDay;

    start = new Date(startDate);
    hrsPerDay = hrsPerRes * numResources;

    if(hours > hrsPerDay){
        hours = hours - hrsPerDay;
        while (hours > 0)
        {
            var weekday = start.getDay();
            if(weekday >0 && weekday <6)
            {
                hours = hours - hrsPerDay;
            }
            start.setDate(start.getDate() + 1);
        }
    }



    return (start.getMonth()+1) + '/' + start.getDate() + '/' + start.getFullYear();
}


function isNumeric(value) {
    return value.trim() !== '' && isFinite(value);
}

function calcEndDate() {
    var startDate = document.getElementById('StartDate').value;
    var hoursProject = document.getElementById('HoursProject').value;
    var numResources = document.getElementById('NumResources').value;
    var hrsPerResource = document.getElementById('HrsPerResource').value;

    if(isNumeric(hoursProject) && isNumeric(numResources) && isNumeric(hrsPerResource) && startDate != ''){
        document.getElementById('CompleteDate').value = Schedule(startDate, hoursProject, numResources, hrsPerResource);
    }

}
