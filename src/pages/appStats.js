/**
 * Registers a stats page under path '/app/stats'
 *
 * @module  Pages
 * @submodule AppStatsPage
 */
module.exports = (supershit) => {
  const page = supershit.page('/app/stats', {
    title: 'App stats'
  })

  const statsCmp = page.cmp('Stats', {
    model: AppStatsModel
  })
}
