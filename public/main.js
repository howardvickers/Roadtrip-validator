$(document).ready(function(){

    var RoadTripPacking = [{
        item: 'Camera',
        weight: 3,
        cost: 150,
    }, 
    {
        item: 'Quarters',
        weight: 3,
        cost: 50,
    },
    {
        item: 'Shovel',
        weight: 20,
        cost: 25,
    },
    {
        item: 'Tire',
        weight: 160,
        cost: 100,
    },
    {
        item: 'Water',
        weight: 30,
        cost: 50,
    }]
    
    var totalCost = 0
    var totalWeight = 0
    var overBudget = ''
    var overWeight = ''

    $('#camera-box').click(function(){
        if (this.checked) {
            totalWeight += RoadTripPacking[0].weight
            totalCost += RoadTripPacking[0].cost
        } else {
            totalWeight -= RoadTripPacking[0].weight
            totalCost -= RoadTripPacking[0].cost
        }
    }) 

    $('#quarters-box').click(function(){
        if (this.checked) {
            totalWeight += RoadTripPacking[1].weight
            totalCost += RoadTripPacking[1].cost
        } else {
            totalWeight -= RoadTripPacking[1].weight
            totalCost -= RoadTripPacking[1].cost
        }
    })

    $('#shovel-box').click(function(){
        if (this.checked) {
            totalWeight += RoadTripPacking[2].weight
            totalCost += RoadTripPacking[2].cost
        } else {
            totalWeight -= RoadTripPacking[2].weight
            totalCost -= RoadTripPacking[2].cost
        }
    })

    $('#tire-box').click(function(){
        if (this.checked) {
            totalWeight += RoadTripPacking[3].weight
            totalCost += RoadTripPacking[3].cost
        } else {
            totalWeight -= RoadTripPacking[3].weight
            totalCost -= RoadTripPacking[3].cost
        }
    })

    $('#water-box').click(function(){
        if (this.checked) {
            totalWeight += RoadTripPacking[4].weight
            totalCost += RoadTripPacking[4].cost
        } else {
            totalWeight -= RoadTripPacking[4].weight
            totalCost -= RoadTripPacking[4].cost
        }
    })

    $('#total-box').click(function(event){
        $.post('/validate', {totalWeight}, function(data){
            if (data.message === "Too Much!"){
                alert("It's too heavy!")
            }
        })
        totalWeight = totalWeight 
        if (totalWeight > 200){
            overWeight = 'This is too heavy!'
            $("#check-weight").removeClass("messagePanelGood")
            $("#check-weight").addClass("messagePanelBad")
        } else {
            overWeight = 'You are within weight limits - great job!'
            $("#check-weight").addClass("messagePanelGood")
            $("#check-weight").removeClass("messagePanelBad")
        } 
    $("#check-weight").html(overWeight)
    $("#total-weight").html(totalWeight)
    }) 

    $('#total-box').click(function(event){
        $.post('/validate', {totalCost}, function(data){
            if (data.message === "Too Much!"){
                alert("It's too expensive!")
            }
        })
        totalCost = totalCost 
        if (totalCost > 200){
            overBudget = 'You cannot afford all this!'
            $("#check-cost").removeClass("messagePanelGood")
            $("#check-cost").addClass("messagePanelBad")
        } else {
            overBudget = 'You are within budget - nice work!'
            $("#check-cost").addClass("messagePanelGood")
            $("#check-cost").removeClass("messagePanelBad")
        } 
    $("#check-cost").html(overBudget)
    $("#total-cost").html(totalCost)
    }) 

    $("#camera-item").html(RoadTripPacking[0].item)
    $("#camera-weight").html(RoadTripPacking[0].weight)
    $("#camera-cost").html(RoadTripPacking[0].cost)
    $("#camera-add_remove").html(RoadTripPacking[0].add_remove)
    $("#quarters-item").html(RoadTripPacking[1].item)
    $("#quarters-weight").html(RoadTripPacking[1].weight)
    $("#quarters-cost").html(RoadTripPacking[1].cost)
    $("#quarters-add_remove").html(RoadTripPacking[1].add_remove)
    $("#shovel-item").html(RoadTripPacking[2].item)
    $("#shovel-weight").html(RoadTripPacking[2].weight)
    $("#shovel-cost").html(RoadTripPacking[2].cost)
    $("#shovel-add_remove").html(RoadTripPacking[2].add_remove)
    $("#tire-item").html(RoadTripPacking[3].item)
    $("#tire-weight").html(RoadTripPacking[3].weight)
    $("#tire-cost").html(RoadTripPacking[3].cost)
    $("#tire-add_remove").html(RoadTripPacking[3].add_remove)
    $("#water-item").html(RoadTripPacking[4].item)
    $("#water-weight").html(RoadTripPacking[4].weight)
    $("#water-cost").html(RoadTripPacking[4].cost)
    $("#water-add_remove").html(RoadTripPacking[4].add_remove)
})