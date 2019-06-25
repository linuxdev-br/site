const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const {createRedirect} = actions

  createRedirect({ fromPath: '/2019/06/19/agenda', toPath: '/agenda',  redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: '/2019/06/19/agenda/', toPath: '/agenda',  redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: '/2019/06/19/agenda-2', toPath: '/agenda-pt',  redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: '/2019/06/19/agenda-2/', toPath: '/agenda-pt',  redirectInBrowser: true, isPermanent: true });

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogPost.js');
    resolve(
      graphql(`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `).then(result => {
        const posts = result.data.allMarkdownRemark.edges;
        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path;
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          });
          resolve();
        });
      })
    );
  });
};
