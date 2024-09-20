function solution(fees, records) {
    var answer = [];
    let cars = {};
    
    // fees [기본 시간, 기본 요금, 단위 시간, 단위 요금]
    records.forEach((carRecord) => {
        let [time, carNumber, status] = carRecord.split(" ");
        let [time_Hours, time_Minutes] = time.split(":").map(Number);
        let totalMinutes = time_Hours * 60 + time_Minutes;
        
        if(cars.hasOwnProperty(carNumber)) {
            if(cars[carNumber][0] === "IN") {
                cars[carNumber][0] = "OUT";
                cars[carNumber][1] += (totalMinutes - cars[carNumber][2]);
            }                
            else if(cars[carNumber][0] === "OUT")
                cars[carNumber][0] = "IN";
                cars[carNumber][2] = totalMinutes;
        }            
        else cars[carNumber] = ["IN", 0, totalMinutes];
    });
    
    Object.keys(cars).forEach(key => {
        if(cars[key][0] === "IN")
            cars[key][1] += (1439 - cars[key][2]);        
        
        let baseFee = fees[1];
        let addFee = 0;
        if(0 <= cars[key][1] - fees[0])        
            addFee = Math.ceil((cars[key][1] - fees[0])/fees[2]) * fees[3];   
        
        cars[key][1] = baseFee + addFee;        
    });
    
    let sortCars = Object.keys(cars).sort();
    answer = sortCars.map(key => cars[key][1]);
    
    return answer;
}