require "rails_helper"

RSpec.describe Api::V1::CerealsController, type: :controller do
  let!(:first_cereal) { Cereal.create(id: 1, name: "Raisin Bran", description: "bland") }

  describe "GET#index" do
      it "should return all the cereals" do
        get :index
        returned_json = JSON.parse(response.body)
        expect(response.status).to eq 200
        expect(response.content_type).to eq("application/json")

        expect(returned_json).to be_kind_of(Array)
        expect(returned_json).to_not be_kind_of(Hash)
        expect(returned_json[0]["name"]).to eq "Raisin Bran"
        expect(returned_json[0]["description"]).to eq "bland"
    end
  end

    describe "GET#show" do
      it "should return all the cereals" do
        get :index, id: 1
        returned_json = JSON.parse(response.body)
        expect(response.status).to eq 200
        expect(response.content_type).to eq("application/json")

        expect(returned_json).to be_kind_of(Array)
        expect(returned_json).to_not be_kind_of(Hash)
        expect(returned_json[0]["name"]).to eq "Raisin Bran"
        expect(returned_json[0]["description"]).to eq "bland"
    end
  end
end
