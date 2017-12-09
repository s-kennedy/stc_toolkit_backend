class AddTemplateToPage < ActiveRecord::Migration[5.1]
  def change
    add_column :pages, :page_type, :string
    add_column :pages, :template, :string
  end
end
