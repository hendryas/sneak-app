<!-- Tabel user token -->
npx sequelize-cli model:generate --name user_token --attributes email:string,token:string
<!-- Tabel carousel -->
npx sequelize-cli model:generate --name carousel --attributes color:string,title:string,image:string
<!-- Tabel navigation -->
npx sequelize-cli model:generate --name navigation --attributes title:string,icon:string
<!-- Tabel bank -->
npx sequelize-cli model:generate --name bank --attributes kode:string,nama_bank:string
<!-- Tabel rekening -->
npx sequelize-cli model:generate --name rekening --attributes kode:string,kode_bank:string,no_rekening:integer,atas_nama:string
<!-- Tabel product -->
npx sequelize-cli model:generate --name product --attributes kode_product:string,name:string,description:string,brand_id:integer,category_id:integer,start_price:integer,discount_price:integer,final_price:integer
<!-- Tabel image_shoes -->
npx sequelize-cli model:generate --name image_shoes --attributes kode_product:string,image:string
<!-- Tabel size_shoes -->
npx sequelize-cli model:generate --name size_shoes --attributes kode_product:string,size:integer,stock:integer
<!-- Tabel brand -->
npx sequelize-cli model:generate --name brand --attributes name:string
<!-- Tabel category -->
npx sequelize-cli model:generate --name category --attributes name:string,icon:string
<!-- Tabel role -->
npx sequelize-cli model:generate --name role --attributes role_name:string
<!-- Tabel notif_superadmin -->
npx sequelize-cli model:generate --name notif_superadmin --attributes email:string,no_order:string,content_notification:string,status_notification:integer,payment_status_id:integer
<!-- Tabel notif_admin -->
npx sequelize-cli model:generate --name notif_admin --attributes email:string,no_order:string,content_notification:string,status_notification:integer,payment_status_id:integer
<!-- Tabel notif_customer -->
npx sequelize-cli model:generate --name notif_customer --attributes email:string,no_order:string,content_notification:string,status_notification:integer,payment_status_id:integer
<!-- Tabel status_payment -->
npx sequelize-cli model:generate --name status_payment --attributes payment_status:string
<!-- Tabel user -->
npx sequelize-cli model:generate --name user --attributes name:string,email:string,password:string,image:string,role_id:integer,is_active:integer
<!-- Tabel recipient_address -->
npx sequelize-cli model:generate --name recipient_address --attributes user_id:integer,address:string,name:string,no_phone:integer,street_name:string,pinpoint:string,postal_code:integer,additional_details:string
<!-- Tabel customer_payment_recap -->
npx sequelize-cli model:generate --name customer_payment_recap --attributes user_id:integer,no_order:string,date_order:date,recipient_address_id:integer,expedition:string,package:string,estimation:string,shipping:integer,grand_total:integer,total_pay:integer,payment_status_id:integer,proof_of_payment:string,status_order:integer,no_resi:string
<!-- Tabel transaction_detail -->
npx sequelize-cli model:generate --name transaction_detail --attributes no_order:string,kode_product:string,quantity:integer
<!-- Tabel total_star_from_customer_buy_shoes -->
npx sequelize-cli model:generate --name total_star_from_customer_buy_shoes --attributes user_id:integer,kode_product:string,star:integer