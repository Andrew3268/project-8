require 'test_helper'

class GiftGuideControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get gift_guide_index_url
    assert_response :success
  end

end
