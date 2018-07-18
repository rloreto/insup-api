import { success, notFound } from '../../services/response/'
import { UserRequestReports } from '.'

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  UserRequestReports.find(query, select, cursor)
    .then((userRequestReports) => userRequestReports.map((userRequestReports) => userRequestReports.view()))
    .then(success(res))
    .catch(next)
