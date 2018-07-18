import mongoose, {
  Schema
} from 'mongoose'

var userSchema = new mongoose.Schema({
  username: String
})

var totalSchema = new mongoose.Schema({
  success: Number,
  timeout: Number,
  cancel: Number,
  pending: Number
})
var daySchema = new mongoose.Schema({
  date: Date,
  success: Number,
  timeout: Number,
  cancel: Number,
  pending: Number
})

var dayDetailSchema = new mongoose.Schema({
  date: Date,
  success: [userSchema],
  timeout: [userSchema],
  cancel: [userSchema],
  pending: [userSchema]

})
const userRequestReportsSchema = new Schema({
  username: {
    type: String
  },
  date: {
    type: Date
  },
  total: {
    type: totalSchema
  },
  days: {
    type: [daySchema]
  },
  detailDays: {
    type: [dayDetailSchema]
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => {
      delete ret._id
    }
  }
})

userRequestReportsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      username: this.username,
      date: this.date,
      total: this.total,
      days: this.days,
      detailDays: this.detailDays,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('UserRequestReports', userRequestReportsSchema)

export const schema = model.schema
export default model
