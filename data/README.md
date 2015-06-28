# Vapor Data Folder

All Vapor plugins should keep their extra files in this folder.

### Usage

If a plugin needs to store any extra files, it's recommended to use this particular folder.
There's a helper method available in `API` which will return correct plugin path for specific plugin
as well as specific user.

**This is important** because extra files should be stored per user as well as per plugin.