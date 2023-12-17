"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const texts_1 = require("../utils/constants/texts");
class IndexController extends base_1.BaseController {
    constructor(IndexService) {
        super();
        this.IndexService = IndexService;
    }
    ping(req, res, next) {
        this.sendSuccessResponse(res, this.StatusCodes.OK, this.IndexService.getPong(), { docs: req.protocol + '://' + req.get('host') + '/api/v1/docs'
        });
    }
    getDocs(req, res) {
        var url = this.IndexService.getDocs();
        if (url) {
            res.redirect(url);
        }
        else {
            res.status(this.StatusCodes.NOT_FOUND).send(texts_1.texts.NOT_FOUND);
        }
    }
}
exports.default = IndexController;
