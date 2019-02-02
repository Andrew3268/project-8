require 'test_helper'

class GadgetsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get gadgets_index_url
    assert_response :success
  end

end
