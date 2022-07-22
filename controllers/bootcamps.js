// @ description GET all bootcamps
//@routes  GET /api/v1/bootcamps
//@access   Public

const { request } = require("http")

exports.getBootcamps = (req,res, next) => {
    res.status(200).json({success: true, msg: 'Show all bootcamp'})
}

// @ description GET single bootcamps
//@routes  GET /api/v1/bootcamps/:id
//@access   Public

exports.getBootcamp = (req,res, next) => {
    res.status(200).json({success: true, msg: `get bootcamp ${req.params.id}`})
}

// @ description  create new bootcamp
//@routes  POST /api/v1/bootcamps/:id
//@access   Private

exports.createBootcamp = (req,res, next) => {
    res.status(200).json({success: true, msg: 'create new bootcamp'})
}

// @ description  update new bootcamp
//@routes  PUT /api/v1/bootcamps/:id
//@access   Private

exports.updateBootcamp = (req,res, next) => {
    res.status(200).json({success: true, msg: `update bootcamp ${req.params.id}`})
}

// @ description  delete  new bootcamp
//@routes  DELETE /api/v1/bootcamps/:id
//@access   Private

exports.deleteBootcamp = (req,res, next) => {
    res.status(200).json({success: true, msg: `delete bootcamp ${req.params.id}`})
}


