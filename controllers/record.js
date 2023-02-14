import {db} from "../db.js"

export const getRecords = (req,res)=>{
   const q = "SELECT id, location_no, datetime FROM dandi.member m JOIN dandi.record r ON m.no = r.member_no";

   db.query(q, (err,data)=>{
    if(err) return res.send(err)

    return res.status(200).json(data);
   })
}


export const getRecord = (req,res)=>{
    let member_no = req.params.member_no;
    const q = `SELECT id, location_no, datetime FROM dandi.member m JOIN dandi.record r ON m.no = r.member_no WHERE member_no = ?`;
 
    db.query(q, member_no , (err,data)=>{
     if(err) return res.send(err)
 
     return res.status(200).json(data);
    })
 }


export const addRecord = (req,res)=>{
    const q = "INSERT INTO dandi.record(datetime, location_no , member_no) VALUES (?)";

    const values = [
        req.body.datetime,
        req.body.location_no,
        req.body.member_no,
    ]

 
    db.query(q, [values], (err,data)=>{
     if(err) return res.send(err)
 
     return res.status(200).json("record has been created.");
    })
 }