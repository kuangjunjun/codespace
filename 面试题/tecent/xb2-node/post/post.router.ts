import * as postController from './post.controller'
const router = express.Router()
import {
    filter,
    sort,
    paginate
} from './post.middleware'  // 按照顺序来执行  中间健 复用

// restful  GET
router.get(
    '/posts',
    filter,
    sort,
    paginate,
    postController.index
)