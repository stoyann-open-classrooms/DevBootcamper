const ErrorResponse = require('../utils/errorResponse')
const Bootcamp = require('../models/Bootcamp')

// @ description GET all bootcamps
//@routes  GET /api/v1/bootcamps
//@access   Public

const { request } = require('http')

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find()
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps })
  } catch (err) {
    next(err)
  }
}

// @ description GET single bootcamps
//@routes  GET /api/v1/bootcamps/:id
//@access   Public

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id)
    res.status(200).json({ success: true, data: bootcamp })
    if (!bootcamp) {
      return next(
        new ErrorResponse(
          `Bootcamp not found with id of ${req.params.id}`,
          404,
        ),
      )
    }
  } catch (err) {
    next(err)
  }
}

// @ description  create new bootcamp
//@routes  POST /api/v1/bootcamps/:id
//@access   Private

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body)
    res.status(201).json({
      success: true,
      data: bootcamp,
    })
  } catch (err) {
    next(err)
  }
}

// @ description  update new bootcamp
//@routes  PUT /api/v1/bootcamps/:id
//@access   Private

exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!bootcamp) {
      return next(
        new ErrorResponse(
          `Bootcamp not found with id of ${req.params.id}`,
          404,
        ),
      )
    }

    res.status(200).json({ success: true, data: bootcamp })
  } catch (err) {
    next(err)
  }
}

// @ description  delete  new bootcamp
//@routes  DELETE /api/v1/bootcamps/:id
//@access   Private

exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
    if (!bootcamp) {
      return next(
        new ErrorResponse(
          `Bootcamp not found with id of ${req.params.id}`,
          404,
        ),
      )
    }

    res.status(200).json({ success: true, data: {} })
  } catch (err) {
    next(err)
  }
}
