class AddPageHeaderToPage < ActiveRecord::Migration[5.1]
  def change
    add_column :pages, :page_header, :jsonb
  end
end
