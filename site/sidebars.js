// @ts-check

const sidebars = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: '学習ルート',
      collapsed: false,
      items: [
        'route/index',
        {
          type: 'category',
          label: '第0部：AIエージェントと学び始める準備',
          collapsed: false,
          items: [
            'route/part-0-start/concept',
            'route/part-0-start/start-here',
            'route/part-0-start/prepare-environment',
            'route/part-0-start/install-ai-agent',
            'route/part-0-start/clone-and-first-request',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'リファレンス',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'reference/index',
      },
      items: [
        'reference/glossary',
        'reference/commands-cheatsheet',
        'reference/troubleshooting',
        'reference/macos-vs-wsl',
        'reference/macos-gnu-userland',
        'reference/repository-layout',
        'reference/ghq',
        'reference/shell-and-prompt-customization',
        'reference/ai-prompts',
        'reference/safety-basics',
        'reference/operation-mindset',
        'reference/learning-paths',
        'reference/official-links',
      ],
    },
  ],
};

module.exports = sidebars;
