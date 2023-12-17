import generalConfig from "../config/general.config";

export default class IndexService {
  getPong() {
    return 'PONG';
  }

  getDocs() {
    var url = generalConfig.DOC_FILE;
    return url;
  }
}
