package myplugin;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import javax.swing.JOptionPane;

import com.nomagic.actions.NMAction;
import com.nomagic.magicdraw.actions.ActionsConfiguratorsManager;

import myplugin.generator.options.GeneratorOptions;
import myplugin.generator.options.ProjectOptions;

/** MagicDraw plugin that performes code generation */
public class MyPlugin extends com.nomagic.magicdraw.plugins.Plugin {
	
	String pluginDir = null; 
	
	public void init() {
		JOptionPane.showMessageDialog( null, "My Plugin init");
		
		pluginDir = getDescriptor().getPluginDirectory().getPath();
		
		// Creating submenu in the MagicDraw main menu 	
		ActionsConfiguratorsManager manager = ActionsConfiguratorsManager.getInstance();		
		manager.addMainMenuConfigurator(new MainMenuConfigurator(getSubmenuActions()));
		
		/** @Todo: load project options (@see myplugin.generator.options.ProjectOptions) from 
		 * ProjectOptions.xml and take ejb generator options */
		
		String output_path = getOutputPath();

		// Spring Model
		GeneratorOptions springModelOptions = new GeneratorOptions(output_path, "modelclass", "templates//spring", "{0}.java", true, "src//main//java//com//example//demo//model"); 				
		springModelOptions.setTemplateDir(pluginDir + File.separator + springModelOptions.getTemplateDir()); //apsolutna putanja
		ProjectOptions.getProjectOptions().getGeneratorOptions().put("SpringModelGenerator", springModelOptions);
		
		// Spring Repository
		GeneratorOptions springRepositoryOptions = new GeneratorOptions(output_path, "repositoryclass", "templates//spring", "{0}.java", true, "src//main//java//com//example//demo//repository"); 				
		springRepositoryOptions.setTemplateDir(pluginDir + File.separator + springRepositoryOptions.getTemplateDir()); //apsolutna putanja
		ProjectOptions.getProjectOptions().getGeneratorOptions().put("SpringRepositoryGenerator", springRepositoryOptions);
		
	}
	
	private String getOutputPath() {
		String output_path = "";
		Properties prop = new Properties();
		InputStream input = null;
		try {
			input = new FileInputStream("resources/projectoptions.properties");
			// load a properties file
			prop.load(input);
			// get the property value and print it out
			output_path = prop.getProperty("OUTPUT_PATH");
		} catch (IOException ex) {
			ex.printStackTrace();
		} finally {
			if (input != null) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return output_path;
	}

	private NMAction[] getSubmenuActions()
	{
	   return new NMAction[]{
			new GenerateAction("Generate"),
	   };
	}
	
	public boolean close() {
		return true;
	}
	
	public boolean isSupported() {				
		return true;
	}
}


