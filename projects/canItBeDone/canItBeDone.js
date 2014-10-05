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


function calcEndDate() {
    var startDate = $('#StartDate').val();
    var hoursProject = $('#HoursProject').val();
    var numResources = $('#NumResources').val();
    var hrsPerResource = $('#HrsPerResource').val();

    if($.isNumeric(hoursProject) && $.isNumeric(numResources) && $.isNumeric(hrsPerResource) && startDate != ''){
        $('#CompleteDate').val(Schedule(startDate, hoursProject,numResources , hrsPerResource));
    }

}