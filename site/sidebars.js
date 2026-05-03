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
          link: {
            type: 'doc',
            id: 'route/part-0-start/index',
          },
          items: [
            'route/part-0-start/concept',
            'route/part-0-start/start-here',
            'route/part-0-start/prepare-environment',
            'route/part-0-start/install-ai-agent',
            'route/part-0-start/clone-and-first-request',
          ],
        },
        {
          type: 'category',
          label: '第1部：PC・OS・CLIの意味を回収する',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'route/part-1-pc-os-cli/index',
          },
          items: [
            'route/part-1-pc-os-cli/review-part-0',
            'route/part-1-pc-os-cli/files-paths',
            'route/part-1-pc-os-cli/os-wsl',
            'route/part-1-pc-os-cli/terminal-shell-commands',
            'route/part-1-pc-os-cli/dangerous-commands-permissions',
            'route/part-1-pc-os-cli/path-shell-config',
            'route/part-1-pc-os-cli/package-managers',
            'route/part-1-pc-os-cli/understand-clone',
            'route/part-1-pc-os-cli/secrets-and-accounts',
            'route/part-1-pc-os-cli/review',
          ],
        },
        {
          type: 'category',
          label: '第2部：生成AIとコーディングエージェントの基礎',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'route/part-2-ai-agents/index',
          },
          items: [
            'route/part-2-ai-agents/generative-ai',
            'route/part-2-ai-agents/models-and-llms',
            'route/part-2-ai-agents/chat-vs-agent',
            'route/part-2-ai-agents/agent-context',
            'route/part-2-ai-agents/tool-options',
            'route/part-2-ai-agents/safe-requests',
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
