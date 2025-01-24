from enum import Enum


class FileCategoryEnum(Enum):
    """
    FileCategoryEnum is an enum class that represents the file category.

    Attributes:
    - IMAGE (str, tuple[str]): The image category
    - VIDEO (str, tuple[str]): The video category
    - AUDIO (str, tuple[str]): The audio category
    - DOCUMENT (str, tuple[str]): The document category
    - ARCHIVE (str, tuple[str]): The archive category
    - OTHERS (str, tuple[str]): The other category
    """

    IMAGE = "IMAGE", ("jpg", "png", "jpeg", "gif", "bmp", "webp", "svg", "ico", "tiff")
    VIDEO = (
        "VIDEO",
        (
            "mp4",
            "avi",
            "flv",
            "wmv",
            "mov",
            "mkv",
            "webm",
            "mpeg",
            "3gp",
            "3g2",
            "m4v",
            "mpg",
            "m2v",
        ),
    )
    AUDIO = (
        "AUDIO",
        ("mp3", "wav", "flac", "aac", "m4a", "wma", "ogg", "opus", "weba"),
    )
    DOCUMENT = (
        "DOCUMENT",
        (
            "pdf",
            "doc",
            "docx",
            "xls",
            "xlsx",
            "ppt",
            "pptx",
            "txt",
            "csv",
            "tsv",
            "rtf",
        ),
    )
    ARCHIVE = "ARCHIVE", ("zip", "rar", "tar", "gz", "7z", "bz2", "xz", "lz", "lzma")
    OTHERS = "OTHERS", None

    def get_text(self) -> str:
        """
        get_text is a method that returns the text of the enum.

        Returns:
        - str: The text of the enum
        """

        return self.value[0]

    def get_extensions(self) -> tuple[str]:
        """
        get_extensions is a method that returns the extensions of the enum.

        Returns:
        - tuple[str]: The extensions of the enum
        """

        return self.value[1]
