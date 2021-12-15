module.exports = queries = {

    vol_from: () => `SELECT depart FROM flights`,

    vol_to: () => `SELECT arrivee FROM flights`,

    // getvol: (from, to, date) => `select depart,  Arrivee, vol.* 
    // from from_vl,to_vl,vol 
    // where from_vl.id = ${from} 
    // and  to_vl.id= ${to}
    // and vol.vol_from = from_vl.id 
    // and  vol.vol_to = to_vl.id
    // and vol.departdate >'${date}'`,

    getvol: (from, to , date) => `select * from flights , dates where depart = ${from} and arrivee= ${to} AND flights.vol_id = dates.vol_id_fk AND dates.date_depart<'${date}'`



};