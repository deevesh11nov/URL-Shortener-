const express = require('express')
const router = express.Router()
const Url = require('../models/url.js');
const {isAuthenticated} = require('../passportConfig.js')

router.get('/', isAuthenticated ,(req,res)=>{
    res.render('profile')
 })

 router.post('/shorten', async (req, res) => {
    const { baseurl } = req.body;

    // Save the URL in the database
    try {
        const url = new Url({
            originalUrl: baseurl,
        });

        await url.save();

        // Generate a short URL based on the ObjectId
        const shortUrl = shortenObjectId(url._id);

        // Update the saved URL with the short URL
        url.shortUrl = shortUrl;
        await url.save();

        // Respond with both the original and shortened URLs
        res.render('profile', { originalUrl: baseurl, shortUrl: shortUrl });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Function to generate a short URL based on the ObjectId
function shortenObjectId(objectId) {
    const hexString = objectId.toHexString();
    const shortString = hexString.substring(0, 8); // You can adjust the length as needed
    return shortString;
}



module.exports = router