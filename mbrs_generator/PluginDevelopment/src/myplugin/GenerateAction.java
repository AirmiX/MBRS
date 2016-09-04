package myplugin;

import java.awt.event.ActionEvent;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;

import javax.swing.JFileChooser;
import javax.swing.JOptionPane;

import myplugin.analyzer.AnalyzeException;
import myplugin.analyzer.ModelAnalyzer;
import myplugin.generator.EJBGenerator;
import myplugin.generator.SpringGenerator;
import myplugin.generator.fmmodel.FMModel;
import myplugin.generator.options.GeneratorOptions;
import myplugin.generator.options.ProjectOptions;

import com.nomagic.magicdraw.actions.MDAction;
import com.nomagic.magicdraw.core.Application;
import com.nomagic.uml2.ext.magicdraw.auxiliaryconstructs.mdmodels.Model;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;

/** Action that activate code generation */
class GenerateAction extends MDAction{
	
	
	public GenerateAction(String name) {			
		super("", name, null, null);		
	}

	public void actionPerformed(ActionEvent evt) {
		
		if (Application.getInstance().getProject() == null) return;
		Model root = Application.getInstance().getProject().getModel();
		if (root == null) return;
	
		String rootDirectory = "com.example.demo";
		
		ModelAnalyzer analyzer = new ModelAnalyzer(root, rootDirectory);	
		
		try {
			analyzer.prepareModel();	

			// ************************* SPRING GENERATOR ***************************
			// Spring Model
			GeneratorOptions go1 = ProjectOptions.getProjectOptions().getGeneratorOptions().get("SpringModelGenerator");			
			SpringGenerator springModelGenerator = new SpringGenerator(go1);
			springModelGenerator.generate();
			
			// Spring Repository
			GeneratorOptions go2 = ProjectOptions.getProjectOptions().getGeneratorOptions().get("SpringRepositoryGenerator");			
			SpringGenerator springRepositoryGenerator = new SpringGenerator(go2);
			springRepositoryGenerator.generate();
			
			// Spring Service
			GeneratorOptions go3 = ProjectOptions.getProjectOptions().getGeneratorOptions().get("SpringServiceGenerator");			
			SpringGenerator springServiceGenerator = new SpringGenerator(go3);
			springServiceGenerator.generate();
			
			// Spring Service Implementation
			GeneratorOptions go4 = ProjectOptions.getProjectOptions().getGeneratorOptions().get("SpringServiceImplGenerator");			
			SpringGenerator springServiceImplGenerator = new SpringGenerator(go4);
			springServiceImplGenerator.generate();
			
			// Spring DTO
			GeneratorOptions go5 = ProjectOptions.getProjectOptions().getGeneratorOptions().get("SpringDTOGenerator");			
			SpringGenerator springDTOGenerator = new SpringGenerator(go5);
			springDTOGenerator.generate();
			
			JOptionPane.showMessageDialog(null, "Code is successfully generated! Generated code is in folder: " + rootDirectory);
//			exportToXml();
		} catch (AnalyzeException e) {
			JOptionPane.showMessageDialog(null, e.getMessage());
		} 			
	}
	
	private void exportToXml() {
		if (JOptionPane.showConfirmDialog(null, "Do you want to extract model metadata?") == 
			JOptionPane.OK_OPTION)
		{	
			JFileChooser jfc = new JFileChooser();
			if (jfc.showSaveDialog(null) == JFileChooser.APPROVE_OPTION) {
				String fileName = jfc.getSelectedFile().getAbsolutePath();
			
				XStream xstream = new XStream(new DomDriver());
				BufferedWriter out;		
				try {
					out = new BufferedWriter(new OutputStreamWriter(
							new FileOutputStream(fileName), "UTF8"));					
					xstream.toXML(FMModel.getInstance().getClasses(), out);
					xstream.toXML(FMModel.getInstance().getEnumerations(), out);
					JOptionPane.showMessageDialog(null, "Metadata successfully extracted!");
					
				} catch (UnsupportedEncodingException e) {
					JOptionPane.showMessageDialog(null, e.getMessage());				
				} catch (FileNotFoundException e) {
					JOptionPane.showMessageDialog(null, e.getMessage());				
				}		             
			}
		}	
	}	  

}