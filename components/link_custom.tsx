import config from "../next.config";

const linkCustom = ({ src }) => {
    return `${config.basePath}${src}`;
};
export default linkCustom;
