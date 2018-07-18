import {
  Router
} from 'express'
import {
  middleware as query
} from 'querymen'
import {
  token
} from '../../services/passport'
import {
  index
} from './controller'
export UserRequestReports, {
schema
}
from './model'

const router = new Router()

/**
 * @api {get} /userRequestReports Retrieve user request reports
 * @apiName RetrieveUserRequestReports
 * @apiGroup UserRequestReports
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} userRequestReports List of user request reports.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({
    required: true
  }),
  query({
    username: {
      type: String
    }
  }),
  index)

export default router
