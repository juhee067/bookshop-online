'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 카테고리 테이블의 컬럼 이름을 변경하는 마이그레이션
    await queryInterface.renameColumn('Categories', 'category_id', 'id');
  },

  down: async (queryInterface, Sequelize) => {
    // 이전 상태로 롤백하는 마이그레이션 (down 마이그레이션)
    await queryInterface.renameColumn('Categories', 'id', 'category_id');
  },
};
