class Api::InfosController < ApplicationController
    before_action :authenticate_user!
    def index
        @info = current_user.info
         render json: @info
      end

    def show
        @info = Info.find(params[:id])
        render json: @info
    end
    def create
        @user = current_user
        @user.create_info(info_params)
        puts "succesful info creation"
       end
    def update
      puts "info patch hit"
     @user = current_user
      #   # @info = Info.find(params[:id])
      @user.info.update(info_params)
      #     render json: @info

        
      end
      def destroy
        @info = Info.find(params[:id]).delete
    
        render status: :ok
      end
      private
      
          def info_params
              params.require(:info).permit(:firstName, :lastName, :email, :phone, :linkedIn)
          end
end
