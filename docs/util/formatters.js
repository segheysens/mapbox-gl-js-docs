import createFormatters from 'documentation/src/output/util/formatters';
import LinkerStack from 'documentation/src/output/util/linker_stack';
import GithubSlugger from 'github-slugger';
import docs from '../components/api.json';

const linkerStack = new LinkerStack({}).namespaceResolver(docs, namespace => {
    const slugger = new GithubSlugger();
    return `#${slugger.slug(namespace)}`;
});

export default createFormatters(linkerStack.link);
