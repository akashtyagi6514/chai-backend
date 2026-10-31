import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // Upload the file on Cloudinary
        const result = await cloudinary.uploader.upload(localFilePath);
        return result;
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        return null;
    }
}

// cloudinary.v2.uploader.upload("https://res.cloudinary.com/r4gjqgnm/image/upload/c_auto,h_600,w_600/b_rgb:3448C5,c_pad,g_west,h_600,w_1200/r_11/co_rgb:FFFFFF,l_text:Courier%20New_80_bold_left_line_spacing_-14:Every%20pixel%20tells%20a%20story./fl_layer_apply,fl_no_overflow,g_east,x_40/cld-sample-4.jpg",
//     {public_id: "sample_image"},
//     function (error, result) {console.log(result); });

export {uploadOnCloudinary}