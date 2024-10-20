# ziputils

Functions for unzipping files. (Future may include zipping as well.)

Dependencies:

- The Windows version uses `PowerShell 5`. Users of Windows 8.1 must manually upgrade
to this version of PowerShell.
- The macOS version uses `unzip` and `gunzip`.
- Except as noted, the necessary tools are pre-installed with a typical installation of any version
of the OS that supports 64-bit Finale.

Thie library expects strings to be client-encoded.  On macOS, client encoding is always utf8,
but on Windows it can be any number of encodings depending on the locale settings and version of Windows.
You can use `client.encode_with_client_codepage` to convert a utf8 string to client encoding.
The `client.execute` function requires client encoding as do `lfs` and all built-in
Lua `os` and `io` functions that take strings as input.

## Functions

- [calc_rmdir_command(path_to_remove)](#calc_rmdir_command)
- [calc_delete_file_command(path_to_remove)](#calc_delete_file_command)
- [calc_temp_output_path(archive_path)](#calc_temp_output_path)
- [calc_gunzip_command(archive_path)](#calc_gunzip_command)
- [calc_is_gzip(buffer)](#calc_is_gzip)

### calc_rmdir_command

```lua
ziputils.calc_rmdir_command(path_to_remove)
```

[View source](https://github.com/finale-lua/lua-scripts/tree/refs/heads/master/src/library/ziputils.lua#L37)

Returns the platform-dependent command to remove a directory. It can be passed
to `client.execute`.

**WARNING** The command, if executed, permanently deletes the contents of the directory.
You would normally call this on the temporary directory name from `calc_temp_output_path`.
But it works on any directory.

| Input | Type | Description |
| ----- | ---- | ----------- |
| `path_to_remove` | `string` | client-encoded path of directory to remove. |

| Return type | Description |
| ----------- | ----------- |
| `string` | client-encoded command string to execute. |

### calc_delete_file_command

```lua
ziputils.calc_delete_file_command(path_to_remove)
```

[View source](https://github.com/finale-lua/lua-scripts/tree/refs/heads/master/src/library/ziputils.lua#L54)

Returns the platform-dependent command to delete a file. It can be passed
to `client.execute`.

**WARNING** The command, if executed, permanently deletes the file.
You would normally call this on the temporary directory name from `calc_temp_output_path`.
But it works on any directory.

| Input | Type | Description |
| ----- | ---- | ----------- |
| `path_to_remove` | `string` | client-encoded path of directory to remove. |

| Return type | Description |
| ----------- | ----------- |
| `string` | client-encoded command string to execute. |

### calc_temp_output_path

```lua
ziputils.calc_temp_output_path(archive_path)
```

[View source](https://github.com/finale-lua/lua-scripts/tree/refs/heads/master/src/library/ziputils.lua#L72)

Returns a path that can be used as a temporary target for unzipping. The caller may create it
either as a file or a directory, because it is guaranteed not to exist when it is returned and it does
not have a terminating path delimiter. Also returns a platform-dependent unzip command that can be
passed to `client.execute` to unzip the input archive into the temporary name as a directory.

This function requires `luaosutils`.

| Input | Type | Description |
| ----- | ---- | ----------- |
| `archive_path` (optional) | `string` | client-encoded filepath to the zip archive that is included in the zip command. |

| Return type | Description |
| ----------- | ----------- |
| `string` | client-encoded temporary path generated by the system. |
| `string` | client-encoded unzip command that can be used to unzip a multifile archived directory structure into the temporary path. |

### calc_gunzip_command

```lua
ziputils.calc_gunzip_command(archive_path)
```

[View source](https://github.com/finale-lua/lua-scripts/tree/refs/heads/master/src/library/ziputils.lua#L106)

Returns the platform-dependent command to gunzip a file to `stdout`. It can be passed
to `client.execute`, which will then return the text directly.

| Input | Type | Description |
| ----- | ---- | ----------- |
| `archive_path` | `string` | client-encoded path of source gzip archive. |

| Return type | Description |
| ----------- | ----------- |
| `string` | client-encoded command string to execute. |

### calc_is_gzip

```lua
ziputils.calc_is_gzip(buffer)
```

[View source](https://github.com/finale-lua/lua-scripts/tree/refs/heads/master/src/library/ziputils.lua#L133)

Detects if an input buffer is a gzip archive.

| Input | Type | Description |
| ----- | ---- | ----------- |
| `buffer` | `string` | binary data to check if it is a gzip archive |

| Return type | Description |
| ----------- | ----------- |
| `boolean` | true if the buffer is a gzip archive |