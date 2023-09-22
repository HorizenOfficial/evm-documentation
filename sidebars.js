/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  horizen_eon: {
    'Introduction - What is EON': [
      'horizen_eon/introduction_what_is_eon/introduction',
      'horizen_eon/introduction_what_is_eon/Inside_EON',
      'horizen_eon/introduction_what_is_eon/environments',
    ],
    'Exploring the Network': [
      'horizen_eon/connect/get_a_wallet',
      'horizen_eon/connect/connect_your_wallet',
      'horizen_eon/connect/get_tzen_from_the_faucet',
      'horizen_eon/connect/eon_block_explorer',
    ],
    'Develop and Deploy - Smart Contracts': [
      'horizen_eon/develop_and_deploy_smart_contracts/remix',
      'horizen_eon/develop_and_deploy_smart_contracts/hardhat',
      'horizen_eon/develop_and_deploy_smart_contracts/truffle',
      'horizen_eon/develop_and_deploy_smart_contracts/local_build_and_deploy',
      'horizen_eon/develop_and_deploy_smart_contracts/verying_a_smart_contract',
    ],
    'Tutorials': [
      'horizen_eon/tutorials/thirdweb',
      'horizen_eon/tutorials/todolist',
    ],
    'Get Help': [
      'horizen_eon/get_help/terminology',
      'horizen_eon/get_help/troubleshooting',
      'horizen_eon/get_help/disclaimer',
    ],
    'Security Guides': [
      'horizen_eon/security_guides/security_user',
    ],
  },
  // governance: {
  //   'Overview': [
  //     'governance/overview/about',
  //     'governance/overview/guiding_values',
  //     'governance/overview/constitution',
  //     'governance/overview/communication_channels',
  //   ],
  //   'Proposal Process': [
  //     'governance/proposal_process/proposal_categories',
  //     'governance/proposal_process/proposal_phases',
  //   ],
  //   'Voting Process': [
  //     'governance/voting_process/linking_mainchain_address',
  //     'governance/voting_process/voting_process',
  //   ],
  //   'Reference': [
  //      'governance/reference/foundational_docs',
  //      'governance/reference/submit_vote',
  //      'governance/reference/join_discussion',
  //  'governance/reference/submit_vote',
  //   ],
  // },
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
