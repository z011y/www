import "./base.css";
import "./elements.ts";

document.body.innerHTML = `
    <layout-provider>
        <page-router>
            <page-view path="/" title="Home" element="home-page"></page-view>
            <page-view path="/about" title="About" element="about-page"></page-view>
            <page-view path="*" title="404 - Page Not Found" element="page-not-found"></page-view>
        </page-router>
    </layout-provider>
`;